import {
  Box,
  Divider,
  Grid,
  Stack,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import Image from "next/image";
import { ContainerText } from "./components/ActionsDrawer";
import { colorsKarbono } from "@/themes/colors";
import BarEtiqueta from "../ReportePrescripcion/components/BarEtiqueta/BarEtiqueta";
import { useContext, useEffect, useState } from "react";
import { ReportesContext } from "../ReportePrescripcion/context/ReportesContext";
import {
  convertirFecha,
  convertirFechaLote,
  formatOnlyTime,
} from "@/utilities/get_String_from_Date_Esp";
import {
  getAgua,
  getSodio,
  getPotacio,
  getMagnesio,
  getVitLiposSolubles,
  getVitHidroSolubles,
  getVit_C,
  getCalcio,
  peso_teorico,
  tipo_bolsa,
  getAminoacidos,
  getDipeptiven,
  getFosforo,
  getLipidos,
  getOmegaven,
  getSoluv_Vit,
  getOligoelementos,
  getDextrosa,
} from "../ReportePrescripcion/data/functionsParams";
import TagInput from "../EtiquetaView/components/ContainerText/TagInput";

export interface PlanProduccionViewProps {}

const PlanProduccionView: React.FC<PlanProduccionViewProps> = () => {
  const { getPrescriptionsByNumber, loadingSave, reporte } =
    useContext(ReportesContext);

  const [pesoReal, setPesoReal] = useState(0);
  const [area, setArea] = useState("");
  const [intervencion, setIntervención] = useState("");

  useEffect(() => {
    getPrescriptionsByNumber();
    // console.log('ROLLLL:', getMeRol()[0])
  }, []);
  console.log("ROLLLL:", reporte);

  const [isPdfMode, setIsPdfMode] = useState(true);

  const handlePdfMode = () => {
    if (isPdfMode) {
      setIsPdfMode(false);
    } else {
      setIsPdfMode(true);
    }
  };

  return (
    <Stack
      direction={"column"}
      overflow={"scroll"}
      paddingBottom={20}
      alignItems={{ xs: "normal", sm: "center" }}
    >
      <Box
        // maxWidth="100vw"
        id="etiqueta_view"
        sx={{
          width: "1281px",
          height: `${isPdfMode ? "1975px" : "2100px"}`,
          paddingX: "10px",
          // marginX:'50px',
          backgroundColor: "#ccc",
          borderRadius: "10px",
          display: "block",
          alignItems: "center",
          justifyContent: "center",
          paddingY: "30px",
        }}
      >
        <Stack
          display={"block"}
          paddingX={6}
          borderRadius={2}
          bgcolor={"white"}
          width={"100%"}
          height={"100%"}
          direction={"column"}
          spacing={2}
        >
          {
            //////////////Fecha-Version-etc///////////////////////////////////////////////
          }
          <Stack
            paddingTop={1}
            direction={"row"}
            justifyContent={"end"}
            spacing={3}
          >
            <Typography
              width={"25%"}
              fontSize="18px"
              color={colorsKarbono.primary}
              fontWeight={700}
              textAlign={"center"}
              paddingY={2}
            >
              PLAN DE PRODUCCIÓN DE NUTRICIÓN PARENTERAL
            </Typography>
          </Stack>

          {
            /////////////////////////////////////////////////////////////////////////////////////////////////////////////
          }
          <Stack paddingTop={1} direction={"row"} justifyContent={"end"}>
            <Grid container spacing={2}>
            <Grid item xs={5}>
                {/*  */}
                <Stack
                  height={"100%"}
                  direction={"column"}
                  justifyContent={"center"}
                >
                  <Typography
                    style={{
                      color: colorsKarbono.primary,
                      fontSize: 30,
                      fontWeight: "bold",
                    }}
                  >
                    Corporación de Fomento Asistencial del Hospital Universitario
                    San Vicente de Paúl
                  </Typography>
                  {/* <Image
                    src="/assets/Logo Fomenthum.png"
                    width={240}
                    height={100}
                    alt=""
                    style={{ marginTop: "0px", alignItems: "center" }}
                  /> */}
                </Stack>
              </Grid>

              <Grid item xs={4}>
                <Stack
                  height={"100%"}
                  direction={"column"}
                  justifyContent={"space-between"}
                >
                  <Stack direction={"row"} spacing={10}>
                    <Typography
                      style={{
                        // color: color,
                        fontSize: 20,
                        fontWeight: "normal",
                      }}
                    >
                      Versión 2.
                    </Typography>

                    <Typography
                      style={{
                        // color: color,
                        fontSize: 20,
                        fontWeight: "normal",
                      }}
                    >
                     NA-FO-0078
                    </Typography>
                  </Stack>

                  <ContainerText
                    titleSize="20px"
                    valueSize="20px"
                    title="Fecha"
                    value={`${convertirFecha(reporte?.fecha)} ${formatOnlyTime(
                      reporte?.fecha
                    )}`}
                  />
                </Stack>
              </Grid>

              <Grid item xs={3}>
                <Stack
                  height={"100%"}
                  direction={"column"}
                  justifyContent={"end"}
                >
                  <ContainerText
                    title="Lote"
                    value={`NPT${convertirFechaLote(reporte?.fecha)}-${
                      reporte?.no_identificacion
                    }`}
                  />
                </Stack>
              </Grid>

              {/* <Grid item xs={3}>
                <Stack
                  height={"100%"}
                  direction={"column"}
                  justifyContent={"end"}
                >
                  <ContainerText
                    title="Fecha"
                    value={`${convertirFecha(
                      reporte?.fecha
                    )} ${formatOnlyTime(reporte?.fecha)}`}
                  />
                </Stack>
              </Grid> */}
            </Grid>
          </Stack>
          {
            /////////////////////////////////////////////////////////////////////////////////////////////////////////////
          }

          <Divider sx={{ paddingY: 1 }} />

          <Stack paddingTop={1} direction={"row"} justifyContent={"end"}>
            <Grid container spacing={2}>
              <Grid item xs={5}>
                <Stack direction={"column"}>
                  <ContainerText title="Institución" value={reporte?.ips!} />
                </Stack>
              </Grid>

              <Grid item xs={5}>
                <Stack direction={"column"}>
                  <ContainerText
                    title="Apellidos y nombre"
                    value={reporte?.nombre_paciente!}
                  />
                </Stack>
              </Grid>

              <Grid item xs={2}>
                <Stack direction={"column"}>
                  <ContainerText
                    title="#ID"
                    value={reporte?.no_identificacion!}
                  />
                </Stack>
              </Grid>
            </Grid>
          </Stack>
          {
            /////////////////////////////////////////////////////////////////////////////////////////////////////////////
          }
          <Stack paddingTop={1} direction={"row"} justifyContent={"end"}>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Stack direction={"column"}>
                  <ContainerText title="Servicio" value={reporte?.servicio!} />
                </Stack>
              </Grid>

              <Grid item xs={4}>
                <Stack direction={"column"}>
                  <ContainerText
                    title="Peso (Kg)"
                    value={`${reporte?.peso!}`}
                  />
                </Stack>
              </Grid>

              <Grid item xs={4}>
                <Stack direction={"column"}>
                  <ContainerText
                    title={`Edad (${reporte?.tipo_edad})`}
                    value={`${reporte?.edad!}`}
                  />
                </Stack>
              </Grid>
            </Grid>
          </Stack>
          {
            /////////////////////////////////////////////////////////////////////////////////////////////////////////////
          }
          <Divider sx={{ paddingY: 1 }} />

          {
            /////////////////////////////////////////////////////////////////////////////////////////////////////////////
          }
          <Stack paddingTop={1} direction={"row"} justifyContent={"end"}>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Stack direction={"column"}>
                  <ContainerText
                    title="Volumen (mL)"
                    value={`${reporte?.volumen!}`}
                  />
                </Stack>
              </Grid>

              <Grid item xs={4}>
                <Stack direction={"column"}>
                  <ContainerText
                    title="Overfill"
                    value={`${reporte?.overfill!}`}
                  />
                </Stack>
              </Grid>

              <Grid item xs={4}></Grid>
            </Grid>
          </Stack>
          {/* <Divider sx={{ paddingY: 1 }} /> */}

          {
            /////////////////////////////////////////////////////////////////////////////////////////////////////////////
          }
          <Stack
            paddingTop={1}
            direction={"row"}
            justifyContent={"end"}
            paddingY={2}
          >
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Box
                  sx={{
                    borderRadius: 3,
                    borderColor: "#EDF1F1",
                    borderWidth: 3,
                    borderStyle: "solid",
                  }}
                >
                  <Stack
                    width={"100%"}
                    direction={"column"}
                    alignItems={"start"}
                    padding={2}
                    spacing={1}
                  >
                    <Stack
                      width={"100%"}
                      direction={"row"}
                      justifyContent={"space-between"}
                    >
                      <Typography
                        fontSize="16px"
                        color={colorsKarbono.primary}
                        fontWeight={700}
                        textAlign={"center"}
                        paddingY={2}
                      >
                        COMPONENTES
                      </Typography>

                      <Typography
                        fontSize="16px"
                        color={colorsKarbono.primary}
                        fontWeight={700}
                        textAlign={"center"}
                        paddingY={2}
                      >
                        VOLUMEN (ml)
                      </Typography>
                    </Stack>

                    {getOmegaven(reporte!).conPurga !== 0 && (
                      <ContainerText
                        isUpper
                        title="OMEGAVEN 10%"
                        value={`${getOmegaven(reporte!).conPurga.toFixed(2)}`}
                      />
                    )}
                    {getLipidos(reporte!).conPurga !== 0 && (
                      <ContainerText
                        isUpper
                        transform="uppercase"
                        title={`${reporte?.lipidos!}`}
                        value={`${getLipidos(reporte!).conPurga.toFixed(2)}`}
                      />
                    )}
                    {getDipeptiven(reporte!).conPurga !== 0 && (
                      <ContainerText
                        isUpper
                        title="GLUTAMINA DIPEPTIDO 20%"
                        value={`${getDipeptiven(reporte!).conPurga.toFixed(2)}`}
                      />
                    )}
                    {getAminoacidos(reporte!).conPurga !== 0 && (
                      <ContainerText
                        isUpper
                        transform="uppercase"
                        title={`${reporte?.aminoacidos!}`}
                        value={`${getAminoacidos(reporte!).conPurga.toFixed(
                          2
                        )}`}
                      />
                    )}
                    {getDextrosa(reporte!).conPurga !== 0 && (
                      <ContainerText
                        isUpper
                        title="DEXTROSA 50%"
                        value={`${getDextrosa(reporte!).conPurga.toFixed(2)}`}
                      />
                    )}
                    {getAgua(reporte!).conPurga !== 0 && (
                      <ContainerText
                        isUpper
                        title="AGUA ESTERIL"
                        value={`${getAgua(reporte!).conPurga.toFixed(2)}`}
                      />
                    )}
                    {getFosforo(reporte!).conPurga !== 0 && (
                      <ContainerText
                        isUpper
                        transform="uppercase"
                        title={`${reporte?.fosfato!}`}
                        value={`${getFosforo(reporte!).conPurga.toFixed(2)}`}
                      />
                    )}
                    {getOligoelementos(reporte!).conPurga !== 0 && (
                      <ContainerText
                        isUpper
                        transform="uppercase"
                        title={`${reporte?.elementos_traza!}`}
                        value={`${getOligoelementos(reporte!).conPurga.toFixed(
                          2
                        )}`}
                      />
                    )}
                    {getSodio(reporte!).conPurga !== 0 && (
                      <ContainerText
                        isUpper
                        title="CLORURO DE SODIO 2 MEQ/ML"
                        value={`${getSodio(reporte!).conPurga.toFixed(2)}`}
                      />
                    )}
                    {getPotacio(reporte!).conPurga !== 0 && (
                      <ContainerText
                        isUpper
                        title="CLORURO DE POTACIO 2 MEQ/ML"
                        value={`${getPotacio(reporte!).conPurga.toFixed(2)}`}
                      />
                    )}
                    {getMagnesio(reporte!).conPurga !== 0 && (
                      <ContainerText
                        isUpper
                        transform="uppercase"
                        title={`${reporte?.magnesio!}`}
                        value={`${getMagnesio(reporte!).conPurga.toFixed(2)}`}
                      />
                    )}
                    {getSoluv_Vit(reporte!).conPurga !== 0 && (
                      <ContainerText
                        isUpper
                        title="SOLUVIT_VITALIPID"
                        value={`${getSoluv_Vit(reporte!).conPurga.toFixed(2)}`}
                      />
                    )}
                    {getVitLiposSolubles(reporte!).conPurga !== 0 && (
                      <ContainerText
                        isUpper
                        title={
                          reporte?.tipo_paciente === "Adulto"
                            ? "VITALIPID ADULT"
                            : "VITALIPID INFANT"
                        }
                        value={`${getVitLiposSolubles(
                          reporte!
                        ).conPurga.toFixed(2)}`}
                      />
                    )}
                    {getVitHidroSolubles(reporte!).conPurga !== 0 && (
                      <ContainerText
                        isUpper
                        transform="uppercase"
                        title={`${reporte?.vit_hidrosolubles!}`}
                        value={`${getVitHidroSolubles(
                          reporte!
                        ).conPurga.toFixed(2)}`}
                      />
                    )}
                    {getVit_C(reporte!).conPurga !== 0 && (
                      <ContainerText
                        isUpper
                        title="VITAMINA C"
                        value={`${getVit_C(reporte!).conPurga}`}
                      />
                    )}
                    {reporte?.acido_folico !== "0" && (
                      <ContainerText
                        isUpper
                        title="ACIDO FOLICO"
                        value={`${reporte?.acido_folico}`}
                      />
                    )}
                    {getCalcio(reporte!).conPurga !== 0 && (
                      <ContainerText
                        isUpper
                        transform="uppercase"
                        title={`${reporte?.calcio!}`}
                        value={`${getCalcio(reporte!).conPurga.toFixed(2)}`}
                      />
                    )}
                  </Stack>
                </Box>
              </Grid>

              <Grid item xs={6}>
                <Box
                  sx={{
                    borderRadius: 3,
                    borderColor: "#EDF1F1",
                    borderWidth: 3,
                    borderStyle: "solid",
                  }}
                >
                  <Stack
                    width={"100%"}
                    direction={"column"}
                    alignItems={"start"}
                    padding={3}
                    spacing={1}
                  >
                    <Typography
                      fontSize="16px"
                      color={colorsKarbono.primary}
                      fontWeight={700}
                      textAlign={"center"}
                      paddingY={2}
                    ></Typography>

                    <ContainerText
                      isUpper
                      title="Peso Máximo  (+3%)"
                      value={`${(
                        peso_teorico(reporte!) +
                        (peso_teorico(reporte!) * 3) / 100
                      ).toFixed(2)}`}
                    />
                    <ContainerText
                      isUpper
                      title="Peso teórico "
                      value={`${peso_teorico(reporte!).toFixed(2)}`}
                    />
                    <ContainerText
                      isUpper
                      title="Peso Mínimo  (-3%)"
                      value={`${(
                        peso_teorico(reporte!) -
                        (peso_teorico(reporte!) * 3) / 100
                      ).toFixed(2)}`}
                    />

                    <Stack
                      width={"100%"}
                      direction={"row"}
                      justifyContent={"space-between"}
                    >
                      <Typography
                        width={"100%"}
                        fontSize="14px"
                        fontWeight={600}
                        textAlign={"start"}
                      >
                        Peso Real:
                      </Typography>

                      <TextField
                        sx={{
                          background: "#EDF1F1",
                          borderRadius: "12px",
                          "& .MuiInput-underline:before": {
                            borderBottom: "none",
                          },
                          "& .MuiInput-underline:after": {
                            borderBottom: "none",
                          },
                        }}
                        variant="standard"
                        value={pesoReal}
                        onChange={(e) => setPesoReal(parseInt(e.target.value))}
                        type="number"
                      />
                    </Stack>

                    <Stack
                      width={"100%"}
                      direction={"row"}
                      justifyContent={"space-between"}
                    >
                      <Typography
                        width={"100%"}
                        fontSize="14px"
                        fontWeight={600}
                        textAlign={"start"}
                      >
                        Area de producción:
                      </Typography>

                      <TextField
                        sx={{
                          background: "#EDF1F1",
                          borderRadius: "12px",
                          "& .MuiInput-underline:before": {
                            borderBottom: "none",
                          },
                          "& .MuiInput-underline:after": {
                            borderBottom: "none",
                          },
                        }}
                        variant="standard"
                        value={area}
                        onChange={(e) => setArea(e.target.value)}
                        type="text"
                      />
                    </Stack>
                    {/* <ContainerText isUpper title="Area de producción" value="xxxxxxxxx" /> */}

                    <Divider sx={{ paddingY: 2 }} />

                    <Stack
                      width={"100%"}
                      direction={"column"}
                      alignItems={"start"}
                      paddingY={3}
                    >
                      {/* <Box width={'100%'} paddingY={2}> */}
                      <Typography
                        fontSize="16px"
                        color={colorsKarbono.primary}
                        fontWeight={700}
                        textAlign={"center"}
                        paddingTop={4}
                      >
                        ESPECIFICACIONES ORGANOLÉPTICAS
                      </Typography>
                      {/* </Box> */}

                      <Stack
                        width={"100%"}
                        direction={"row"}
                        spacing={3}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                      >
                        <Typography
                          width={"250px"}
                          fontSize="14px"
                          textAlign={"start"}
                          paddingY={2}
                        >
                          Con Lípido (Smoflipid 20%, Clinoleic,
                          Lipoplus,Omegaven), Con vitaminas (Multi
                          12K1,Cernevit,Soluvit+Vitalipid)
                        </Typography>

                        <Stack
                          maxWidth={"150px"}
                          height={"50px"}
                          direction={"row"}
                          flexGrow={1}
                          bgcolor="#EDF1F1"
                          borderRadius={3}
                          paddingY={0.5}
                          justifyContent={"center"}
                          alignItems={"center"}
                        >
                          <Typography
                            borderRadius={3}
                            bgcolor="#EDF1F1"
                            fontSize={14}
                            textAlign={"center"}
                          >
                            Amarillo lechoso
                          </Typography>
                        </Stack>
                      </Stack>

                      <Stack
                        width={"100%"}
                        direction={"row"}
                        spacing={3}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                      >
                        <Typography
                          width={"250px"}
                          fontSize="14px"
                          textAlign={"start"}
                          paddingY={2}
                        >
                          Sin Lípido, Con vitaminas (Multi
                          12K1,Cernevit,Soluvit)
                        </Typography>

                        <Stack
                          maxWidth={"150px"}
                          height={"50px"}
                          direction={"row"}
                          flexGrow={1}
                          bgcolor="#EDF1F1"
                          borderRadius={3}
                          paddingY={0.5}
                          justifyContent={"center"}
                          alignItems={"center"}
                        >
                          <Typography
                            borderRadius={3}
                            bgcolor="#EDF1F1"
                            fontSize={14}
                            textAlign={"center"}
                          >
                            Amarillo translucido
                          </Typography>
                        </Stack>
                      </Stack>

                      <Stack
                        width={"100%"}
                        direction={"row"}
                        spacing={3}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                      >
                        <Typography
                          width={"250px"}
                          fontSize="14px"
                          textAlign={"start"}
                          paddingY={2}
                        >
                          Con Lípido (Smoflipid 20%, Clinoleic,
                          Lipoplus,Omegaven), Sin vitaminas
                        </Typography>

                        <Stack
                          maxWidth={"150px"}
                          height={"50px"}
                          direction={"row"}
                          flexGrow={1}
                          bgcolor="#EDF1F1"
                          borderRadius={3}
                          paddingY={0.5}
                          justifyContent={"center"}
                          alignItems={"center"}
                        >
                          <Typography
                            borderRadius={3}
                            bgcolor="#EDF1F1"
                            fontSize={14}
                            textAlign={"center"}
                          >
                            Blanco lechoso
                          </Typography>
                        </Stack>
                      </Stack>

                      <Stack
                        width={"100%"}
                        direction={"row"}
                        spacing={3}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                      >
                        <Typography
                          width={"250px"}
                          fontSize="14px"
                          textAlign={"start"}
                          paddingY={2}
                        >
                          Sin lípidos Sin vitaminas
                        </Typography>

                        <Stack
                          maxWidth={"150px"}
                          height={"50px"}
                          direction={"row"}
                          flexGrow={1}
                          bgcolor="#EDF1F1"
                          borderRadius={3}
                          paddingY={0.5}
                          justifyContent={"center"}
                          alignItems={"center"}
                        >
                          <Typography
                            borderRadius={3}
                            bgcolor="#EDF1F1"
                            fontSize={14}
                            textAlign={"center"}
                          >
                            Incoloro
                          </Typography>
                        </Stack>
                      </Stack>
                    </Stack>
                  </Stack>
                </Box>
              </Grid>
            </Grid>
          </Stack>
          {
            ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
          }

          <Stack paddingTop={1} direction={"row"} paddingY={1}>
            <Box
              sx={{
                borderRadius: 3,
                borderColor: "#EDF1F1",
                borderWidth: 3,
                borderStyle: "solid",
                padding: 3,
                width: "100%",
              }}
            >
              <Grid container spacing={10}>
                {
                  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                }

                <Grid item xs={4}>
                  <Typography
                    fontSize="16px"
                    color={colorsKarbono.primary}
                    fontWeight={700}
                    textAlign={"start"}
                    paddingY={2}
                  >
                    ENVASE PRIMARIO
                  </Typography>

                  <Box width={"100%"} paddingY={1}>
                    <ContainerText
                      isUpper
                      title="BOLSA EVA"
                      value={`${tipo_bolsa(reporte?.volumen!)}`}
                    />
                  </Box>
                  <Box width={"100%"} paddingY={1}>
                    <ContainerText
                      isUpper
                      title="DISPOSITIVO ADICIONAL"
                      value={reporte?.filtro ? "Filtro" : "-"}
                    />
                  </Box>
                </Grid>
                {
                  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                }
                {
                  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                }
                <Grid item xs={8}>
                  <Typography
                    fontSize="16px"
                    color={colorsKarbono.primary}
                    fontWeight={700}
                    textAlign={"start"}
                    paddingY={2}
                  >
                    CONTROL DE CALIDAD
                  </Typography>

                  <Stack direction={"row"} justifyContent={"space-between"}>
                    {
                      ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                    }

                    <Grid item xs={4}>
                      <Typography
                        fontSize="12px"
                        fontWeight={700}
                        textAlign={"start"}
                        paddingY={2}
                      >
                        CONTROL ORGANOLÉPTICO
                      </Typography>

                      <Stack direction={"row"} justifyContent={"space-between"}>
                        <Stack
                          width={"300px"}
                          direction={"column"}
                          paddingTop={2}
                        >
                          <Typography
                            fontSize="14px"
                            fontWeight={500}
                            textAlign={"start"}
                            paddingTop={3}
                          >
                            Amarillo lechoso
                          </Typography>
                          <Typography
                            fontSize="14px"
                            fontWeight={500}
                            textAlign={"start"}
                            paddingTop={1.25}
                          >
                            Amarillo translucido
                          </Typography>
                          <Typography
                            fontSize="14px"
                            fontWeight={500}
                            textAlign={"start"}
                            paddingTop={1.25}
                          >
                            Blanco lechoso
                          </Typography>
                          <Typography
                            fontSize="14px"
                            fontWeight={500}
                            textAlign={"start"}
                            paddingTop={1.25}
                          >
                            Incoloro
                          </Typography>
                          <Typography
                            fontSize="14px"
                            fontWeight={500}
                            textAlign={"start"}
                            paddingTop={1.25}
                          >
                            Partículas
                          </Typography>
                          <Typography
                            fontSize="14px"
                            fontWeight={500}
                            textAlign={"start"}
                            paddingTop={1.25}
                          >
                            Apariencia
                          </Typography>
                        </Stack>

                        <Grid container>
                          {[...Array(7)].map((_, rowIndex) => (
                            <Grid
                              key={rowIndex}
                              item
                              xs={12}
                              sx={{ display: "flex" }}
                            >
                              {[...Array(2)].map((_, colIndex) => (
                                <Box
                                  key={colIndex}
                                  sx={{
                                    width: "32px",
                                    height: "32px",
                                    border: "1px solid #ccc", // Borde gris
                                  }}
                                >
                                  {rowIndex === 0 && colIndex == 0 ? (
                                    <Typography
                                      fontSize="18px"
                                      textAlign={"center"}
                                      fontWeight={600}
                                    >
                                      C
                                    </Typography>
                                  ) : (
                                    ""
                                  )}
                                  {rowIndex === 0 && colIndex == 1 ? (
                                    <Typography
                                      fontSize="18px"
                                      textAlign={"center"}
                                      fontWeight={600}
                                    >
                                      NC
                                    </Typography>
                                  ) : (
                                    ""
                                  )}
                                </Box>
                              ))}
                            </Grid>
                          ))}
                        </Grid>
                      </Stack>
                    </Grid>
                    {
                      ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                    }
                    <Grid item xs={4}>
                      <Typography
                        fontSize="12px"
                        fontWeight={700}
                        textAlign={"start"}
                        paddingY={2}
                      >
                        CONTROL DE EMPAQUE
                      </Typography>

                      <Stack direction={"row"} justifyContent={"space-between"}>
                        <Stack
                          width={"300px"}
                          direction={"column"}
                          paddingTop={2}
                        >
                          <Typography
                            fontSize="14px"
                            fontWeight={500}
                            textAlign={"start"}
                            paddingTop={3}
                          >
                            Etiqueta
                          </Typography>
                          <Typography
                            fontSize="14px"
                            fontWeight={500}
                            textAlign={"start"}
                            paddingTop={1.25}
                          >
                            Envase Primario
                          </Typography>
                          <Typography
                            fontSize="14px"
                            fontWeight={500}
                            textAlign={"start"}
                            paddingTop={1.25}
                          >
                            Envase Secundario
                          </Typography>
                          <Typography
                            fontSize="14px"
                            fontWeight={500}
                            textAlign={"start"}
                            paddingTop={1.25}
                          >
                            Ausencia de fugas
                          </Typography>
                          <Typography
                            fontSize="14px"
                            fontWeight={500}
                            textAlign={"start"}
                            paddingTop={1.25}
                          >
                            Integridad envases
                          </Typography>
                        </Stack>

                        <Grid container>
                          {[...Array(6)].map((_, rowIndex) => (
                            <Grid
                              key={rowIndex}
                              item
                              xs={12}
                              sx={{ display: "flex" }}
                            >
                              {[...Array(2)].map((_, colIndex) => (
                                <Box
                                  key={colIndex}
                                  sx={{
                                    width: "32px",
                                    height: "32px",
                                    border: "1px solid #ccc", // Borde gris
                                  }}
                                >
                                  {rowIndex === 0 && colIndex == 0 ? (
                                    <Typography
                                      fontSize="18px"
                                      textAlign={"center"}
                                      fontWeight={600}
                                    >
                                      C
                                    </Typography>
                                  ) : (
                                    ""
                                  )}
                                  {rowIndex === 0 && colIndex == 1 ? (
                                    <Typography
                                      fontSize="18px"
                                      textAlign={"center"}
                                      fontWeight={600}
                                    >
                                      NC
                                    </Typography>
                                  ) : (
                                    ""
                                  )}
                                </Box>
                              ))}
                            </Grid>
                          ))}
                        </Grid>
                      </Stack>
                    </Grid>

                    {
                      ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                    }
                    <Grid item xs={4}>
                      <Typography
                        fontSize="12px"
                        fontWeight={700}
                        textAlign={"start"}
                        paddingY={2}
                      >
                        DISPOSITIVOS MEDICOS
                      </Typography>

                      <Stack direction={"row"} justifyContent={"space-between"}>
                        <Stack
                          width={"300px"}
                          direction={"column"}
                          paddingTop={2}
                        >
                          <Typography
                            fontSize="14px"
                            fontWeight={500}
                            textAlign={"start"}
                            paddingTop={3}
                          >
                            Instalación
                          </Typography>
                          <Typography
                            fontSize="14px"
                            fontWeight={500}
                            textAlign={"start"}
                            paddingTop={1.25}
                          >
                            Purga sin Aire
                          </Typography>
                          <Typography
                            fontSize="14px"
                            fontWeight={500}
                            textAlign={"start"}
                            paddingTop={1.25}
                          >
                            Filtro
                          </Typography>
                        </Stack>

                        <Grid container>
                          {[...Array(4)].map((_, rowIndex) => (
                            <Grid
                              key={rowIndex}
                              item
                              xs={12}
                              sx={{ display: "flex" }}
                            >
                              {[...Array(3)].map((_, colIndex) => (
                                <Box
                                  key={colIndex}
                                  sx={{
                                    width: "32px",
                                    height: "32px",
                                    border: "1px solid #ccc", // Borde gris
                                  }}
                                >
                                  {rowIndex === 0 && colIndex == 0 ? (
                                    <Typography
                                      fontSize="18px"
                                      textAlign={"center"}
                                      fontWeight={600}
                                    >
                                      C
                                    </Typography>
                                  ) : (
                                    ""
                                  )}
                                  {rowIndex === 0 && colIndex == 1 ? (
                                    <Typography
                                      fontSize="18px"
                                      textAlign={"center"}
                                      fontWeight={600}
                                    >
                                      NC
                                    </Typography>
                                  ) : (
                                    ""
                                  )}
                                  {rowIndex === 0 && colIndex == 2 ? (
                                    <Typography
                                      fontSize="18px"
                                      textAlign={"center"}
                                      fontWeight={600}
                                    >
                                      NA
                                    </Typography>
                                  ) : (
                                    ""
                                  )}
                                </Box>
                              ))}
                            </Grid>
                          ))}
                        </Grid>
                      </Stack>
                    </Grid>
                  </Stack>
                </Grid>

                {
                  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                }
              </Grid>
            </Box>
          </Stack>

          {
            ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
          }
          <Stack paddingTop={1} direction={"row"} paddingY={1}>
            <Box
              sx={{
                borderRadius: 3,
                borderColor: "#EDF1F1",
                borderWidth: 3,
                borderStyle: "solid",
                padding: 3,
                width: "100%",
              }}
            >
              <Stack direction={"row"}>
                <Grid container spacing={10}>
                  <Grid item xs={6}>
                    <ContainerText
                      titleWeigth="700"
                      titleSize="20px"
                      title="PRESCRIPTOR"
                      color={colorsKarbono.primary}
                      value={
                        reporte?.user?.nombre_apellidos
                          ? reporte?.user?.nombre_apellidos
                          : "-"
                      }
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TagInput
                      title="PREPARA:"
					  direction={isPdfMode?"row":"column"}
					  sizeTitle={20}
					  sizeText={16}
                      initialValues={
                        reporte?.preparador?.nombre_apellidos
                          ? [reporte.preparador.nombre_apellidos]
                          : []
                      }
                      color={colorsKarbono.primary}
                      isPdfMode={isPdfMode}
                    />
                    {/* <ContainerText
                      titleWeigth="700"
                      titleSize="20px"
                      title="PREPARÓ"
                      color={colorsKarbono.primary}
                      value={
                        reporte?.preparador?.nombre_apellidos
                          ? reporte?.preparador?.nombre_apellidos
                          : "-"
                      }
                    /> */}
                  </Grid>
                </Grid>
              </Stack>

              <Grid container spacing={10} paddingY={1}>
                <Grid item xs={8}>
                  <Box width={"100%"} paddingY={1}>
                    <ContainerText
                      titleWeigth="700"
                      titleSize="20px"
                      title="Responsable del Control de Calidad"
                      color={colorsKarbono.primary}
                      value={
                        reporte?.controlador_de_calidad?.nombre_apellidos!
                          ? reporte?.controlador_de_calidad?.nombre_apellidos!
                          : "-"
                      }
                    />
                  </Box>
                </Grid>
              </Grid>

              <Grid item xs={12}>
                <Stack
                  width={"inline-block"}
                  direction={"row"}
                  alignItems={"center"}
                  spacing={4}
                  justifyContent={"normal"}
                >
                  <Typography fontWeight={700} width={"100px"}>
                    INTERVENCIÓN FARMACÉUTICA:
                  </Typography>
                  {/* 
									<Stack
										width={'100%'}
										direction={'row'}
										// flexGrow={isUpper ? 0 : 1}
										bgcolor='#EDF1F1'
										borderRadius={3}
										paddingY={0.5}
										justifyContent={'center'}> */}

                  <TextField
                    sx={{
                      width: "100%",
                      background: "#EDF1F1",
                      borderRadius: "12px",
                      "& .MuiInput-underline:before": {
                        borderBottom: "none",
                      },
                      "& .MuiInput-underline:after": {
                        borderBottom: "none",
                      },
                    }}
                    variant="standard"
                    value={intervencion}
                    onChange={(e) => setIntervención(e.target.value)}
                    type="text"
                  />

                  {/* </Stack> */}
                </Stack>
              </Grid>
            </Box>
          </Stack>
          {/* <Typography
						// bgcolor={'red'}
						fontSize='16px'
						// paddingY={2}
						width={'100%'}
						height={'20px'}
						style={{ transform: 'rotate(-90deg)', position: 'relative', right: '-605px', top: '-650px' }}
					>
						Conservar en cadena de frio y protegidos de la luz
					</Typography> */}
        </Stack>
      </Box>

      <BarEtiqueta
        idDescargar="etiqueta_view"
        title="Plan de producción"
        handlePdfMode={handlePdfMode}
        pdfMode={isPdfMode}
      />
    </Stack>
  );
};

export default PlanProduccionView;
